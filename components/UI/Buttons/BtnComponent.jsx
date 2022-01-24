import { CustomBtn, CustomBtnText } from "../../Styles/Buttons";

const BtnComponent = ({ text, btnStyle, ...rest }) => {

  return (
      <CustomBtn
        btnType={btnStyle} 
        {...rest}>

      <CustomBtnText btnType={btnStyle}>
        {text}
      </CustomBtnText>
    </CustomBtn>
  )
}

export default BtnComponent;
