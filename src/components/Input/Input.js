import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import "./style.scss";

const InputComponent = React.memo(
  ({ id, handleInputChange, handleClearValue, value }) => {
    return (
      <div className="conteiner">
        <div className="wrap-inputs">
          <input
            id={id}
            name={`input-name-${id}`}
            className="input-name"
            type="text"
            value={value && value.inputLabel}
            onChange={(e) =>
              handleInputChange(id, e.target.value, "inputLabel")
            }
          />
          {value && value.inputLabel && (
            <ClearIcon
              onClick={() => handleClearValue(id, "inputLabel")}
              className="icon"
            />
          )}
        </div>
        <div className="wrap-inputs">
          <input
            id={id}
            name={`input-value-${id}`}
            className="input-value"
            type="text"
            value={value && value.inputValue}
            onChange={(e) =>
              handleInputChange(id, e.target.value, "inputValue")
            }
          />
          {value && value.inputValue && (
            <ClearIcon
              onClick={() => handleClearValue(id, "inputValue")}
              className="icon"
            />
          )}
        </div>
      </div>
    );
  }
);

export default InputComponent;
