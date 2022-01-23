import BaseButtomComponent, { ButtomStyles } from "./BaseButtonComponent";

const PrimaryButtomComponent = ({ title, onclick }) => {
    return (
        <BaseButtomComponent 
            text={title} 
            callback={onclick}
            buttonStyles={[ButtomStyles.button, ButtomStyles.buttonPrimary]}
            textStyles={[ButtomStyles.textStyle, ButtomStyles.textPrimary]}
            />
    )
}

export default PrimaryButtomComponent;