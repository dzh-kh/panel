const Controllers = ({ isActive }) => {
  return (
    <div className="controller-group">
      <Button id="save-items" type="primary">
        Load
      </Button>
      <Button disabled={!isActive} id="delete-element" type="primary" ghost>
        Delete element
      </Button>
      <Button id="delete-all" danger>
        Clear canvas
      </Button>
      <div className="file-input">
        <input
          type="file"
          name="json-uploader"
          id="json-uploader"
          className="file-input__input"
        />
        <label className="file-input__label" htmlFor="json-uploader">
          <span>Upload file</span>
        </label>
      </div>
    </div>
  );
};

export default Controllers;
