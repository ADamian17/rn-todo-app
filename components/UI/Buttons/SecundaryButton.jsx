import BaseButtomComponent, { ButtomStyles } from "./BaseButtonComponent";


const SecundaryButtomComponent = ({ title, onclick}) => {
    return (
        <BaseButtomComponent 
            text={title} 
            callback={onclick}
            buttonStyles={[ButtomStyles.button, ButtomStyles.buttonSecundary]}
            textStyles={[ButtomStyles.textStyle, ButtomStyles.textSecundary]}

            />
    )
}

export default SecundaryButtomComponent;