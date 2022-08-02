import styled from "styled-components"

const Wrapper = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: lightgrey;
`;

const Block = styled.div`
    padding: ${(props) => props.padding};
    border: 1px solid black;
    border-radius: 1rem;
    background-color: ${(props)=>props.backgroundColor};
    color: white;
    font-size: 2rem;
    text-align: center;

    &:hover
    { 
        animation-duration: 3s; animation-name: rainbowLink; animation-iteration-count: infinite; } 
        @keyframes rainbowLink {     
        0% { background-color: #ff2a2a; }
        15% { background-color: #ff7a2a; }
        30% { background-color: #ffc52a; }
        45% { background-color: #43ff2a; }
        60% { background-color: #2a89ff; }
        75% { background-color: #202082; }
        90% { background-color: #6b2aff; } 
        100% { background-color: #e82aff; }
}
    // {
        // background-color: black;
        // transform: rotate(5deg);    
    // }
`;

const blockItems = [
    {
        label: "1",
        padding: "1rem",
        backgroundColor: "red"
    },
    {
        label: "2",
        padding: "3rem",
        backgroundColor: "green"
    },
    {
        label: "3",
        padding: "2rem",
        backgroundColor: "blue"
    },
]

function Blocks(props) {
    return (
        <Wrapper>
            {blockItems.map((blockItem)=>{
                return (
                    <Block
                        padding={blockItem.padding}
                        backgroundColor={blockItem.backgroundColor}>
                        {blockItem.label}
                    </Block>
                );
            })}
        </Wrapper>
    );
}

export default Blocks;