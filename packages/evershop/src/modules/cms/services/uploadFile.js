// const path = require('path');
// const fs = require('fs').promises;
// const { CONSTANTS } = require('@evershop/evershop/src/lib/helpers');
// const { getConfig } = require('@evershop/evershop/src/lib/util/getConfig');
// const { getValueSync } = require('@evershop/evershop/src/lib/util/registry');
// const { buildUrl } = require('@evershop/evershop/src/lib/router/buildUrl');

// /**
//  * @param {Array} files an array of files in the format of {name: String, data: Buffer}
//  * @param {String} destinationPath the destination path
//  */
// module.exports.uploadFile = async (files, destinationPath) => {
//   /**
//    * @type {Object} uploader
//    * @property {Function} upload
//    */
//   const fileUploader = getValueSync(
//     'fileUploader',
//     localUploader,
//     {
//       config: getConfig('system.file_storage')
//     },
//     (value) =>
//       // The value must be an object with an upload method
//       value && typeof value.upload === 'function'
//   );

//   const results = await fileUploader.upload(files, destinationPath);
//   return results;
// };

// const localUploader = {
//   upload: async (files, destinationPath) => {
//     // Assumming the we are using MemoryStorage for multer. Now we need to write the files to disk.
//     // The files argument is an array of files from multer.
//     const mediaPath = CONSTANTS.MEDIAPATH;
//     const destination = path.join(mediaPath, destinationPath);
//     // Create the destination folder if it does not exist
//     await fs.mkdir(destination, { recursive: true });
//     // Save the files to disk asynchrously
//     const results = await Promise.all(
//       files.map((file) =>
//         fs
//           .writeFile(path.join(destination, file.filename), file.buffer)
//           .then(() => ({
//             name: file.filename,
//             type: file.minetype,
//             size: file.size,
//             url: buildUrl('staticAsset', [
//               path
//                 .join(destinationPath, file.filename)
//                 .split('\\')
//                 .join('/')
//                 .replace(/^\//, '')
//             ])
//           }))
//       )
//     );
//     return results;
//   }
// };

const path = require('path');
const fs = require('fs').promises;
const { CONSTANTS } = require('@evershop/evershop/src/lib/helpers');
const { getConfig } = require('@evershop/evershop/src/lib/util/getConfig');
const { getValueSync } = require('@evershop/evershop/src/lib/util/registry');
const AWS = require('aws-sdk');

/**
 * @param {Array} files an array of files in the format of {name: String, data: Buffer}
 * @param {String} destinationPath the destination path
 */
module.exports.uploadFile = async (files, destinationPath) => {
  /**
   * @type {Object} uploader
   * @property {Function} upload
   */
  const fileUploader = getValueSync(
    'fileUploader',
    s3Uploader,
    {
      config: getConfig('system.file_storage')
    },
    (value) =>
      // The value must be an object with an upload method
      value && typeof value.upload === 'function'
  );

  const results = await fileUploader.upload(files, destinationPath);
  return results;
};

// S3 uploader configuration
const s3Uploader = {
  upload: async (files, destinationPath) => {
    const s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION
    });

    const bucketName = process.env.AWS_S3_BUCKET_NAME;

    // Upload each file to S3
    const results = await Promise.all(
      files.map((file) => {
        const fileKey = path
          .join(destinationPath, file.filename)
          .replace(/\\/g, '/');

        return s3
          .upload({
            Bucket: bucketName,
            Key: fileKey,
            Body: file.buffer,
            ContentType: file.mimetype
          })
          .promise()
          .then((response) => ({
            name: file.filename,
            type: file.mimetype,
            size: file.size,
            url: response.Location // S3 file URL
          }));
      })
    );

    return results;
  }
};
