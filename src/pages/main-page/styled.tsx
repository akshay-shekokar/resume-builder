import styled from 'styled-components';

export const StyledMainPage = styled.div`
    height: calc( 100vh - 5rem );

    .container {
        flex: 1 1 auto;
        overflow-y: auto;

        .work-area {
            height: calc(100% - 2.5rem);
            overflow: auto;
        }
    }
`;
