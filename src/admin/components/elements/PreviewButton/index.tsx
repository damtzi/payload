import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../../forms/Form/context';
import { useAuth } from '@payloadcms/config-provider';
import Button from '../Button';

const baseClass = 'preview-btn';

const PreviewButton = ({ generatePreviewURL }) => {
  const { token } = useAuth();
  const { getFields } = useForm();
  const fields = getFields();

  if (generatePreviewURL && typeof generatePreviewURL === 'function') {
    const previewURL = generatePreviewURL(fields, token);

    return (
      <Button
        el="anchor"
        className={baseClass}
        buttonStyle="secondary"
        url={previewURL}
      >
        Preview
      </Button>
    );
  }

  return null;
};

PreviewButton.defaultProps = {
  generatePreviewURL: null,
};

PreviewButton.propTypes = {
  generatePreviewURL: PropTypes.func,
};

export default PreviewButton;
