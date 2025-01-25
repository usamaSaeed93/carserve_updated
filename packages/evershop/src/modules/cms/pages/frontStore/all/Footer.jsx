import React from 'react';
import PropTypes from 'prop-types';

function Footer({ themeConfig: { copyRight } }) {
  return null;
}

Footer.propTypes = {
  themeConfig: PropTypes.shape({
    copyRight: PropTypes.string
  })
};

Footer.defaultProps = {
  themeConfig: {
    copyRight: '© 2022 Evershop. All Rights Reserved.'
  }
};

export default Footer;

export const layout = {
  areaId: 'footer',
  sortOrder: 10
};

export const query = `
  query query {
    themeConfig {
      copyRight
    }
  }
`;
