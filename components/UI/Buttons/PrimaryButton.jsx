import BaseButtomComponent, { ButtomStyles } from "./BaseButtonComponent";

export const PrimaryButtomComponent = ({ title, onclick }) => {
    return (
        <BaseButtomComponent 
            text={title} 
            callback={onclick}
            buttonStyles={[ButtomStyles.button, ButtomStyles.buttonPrimary]}
            textStyles={[ButtomStyles.textStyle, ButtomStyles.textPrimary]}
            />
    )
}
