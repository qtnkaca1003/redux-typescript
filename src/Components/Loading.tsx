

import { Col, Row, Skeleton } from 'antd';


export const Loading = () => {
    return (
        <>
            <Row justify='center'>
                <Skeleton style={{justifyContent:"center"}} active paragraph={{ rows: 1 }} />
                <Skeleton active paragraph={{ rows: 1 }} />
                <Skeleton active paragraph={{ rows: 1 }} />
                <Skeleton active paragraph={{ rows: 1 }} />
            </Row>


        </>
    );
};