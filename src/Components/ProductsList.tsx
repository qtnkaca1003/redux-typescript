import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Card, Row, Col } from 'antd';
import { State } from '../Redux/Reducer';
type ProductType = any

export const ProductList = (props: ProductType) => {
    const { Meta } = Card;

    const product = useSelector((state: State) => state.allProduct)
    console.log(product);
    const length = product.length;
    console.log(length);
    //undefined
    const ShowProducts = () => {
        return (
            <>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {
                    product.map((e: any) => {
                        return (
                            <>
                                    <Col  style={{textAlign:"center", marginTop:"30px"}} className="gutter-row" span={6}>
                                        <Card
                                            bordered={true}
                                            hoverable={true}
                                            style={{ width: 300 }}
                                            cover={<img width={240} height={350} alt="example" src={e.image} />}>
                                            <Meta title={e.title} description={e.description.substring(0, 12)} />
                                        </Card>
                                    </Col>
                               
                            </>
                        )
                    })

                }
                 </Row>
            </>
        )

    }
    return (

        <>
            {length == undefined ? <> Loading...</> : <ShowProducts />}



        </>
    )


}