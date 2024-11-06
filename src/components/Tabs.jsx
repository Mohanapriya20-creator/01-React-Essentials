export default function Tabs({ children, buttons, buttonContainer='menu' }) {
    let ButtonsContainer = buttonContainer
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    );
}