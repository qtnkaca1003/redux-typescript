import { useSelector } from "react-redux";
import { Card, Row, Col,Layout, Button,Typography } from 'antd';
import { State } from '../Redux/Reducer';
import { Loading } from "./Loading";

const { Header} = Layout;
const { Meta } = Card;
const { Title } = Typography;
type ProductType = any
export const ProductList = (props: ProductType) => {
   
    const product = useSelector((state: State) => state.allProduct)
    console.log(product);
    const length = product.length;
    console.log(length);
    const ShowProducts = () => {
        return (
            <>
              <Row className="ant-layout-header" style={{background:"#fff"}} justify="space-around" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {
                    product.map((e: any) => {
                        return (
                            <>
                                    <Col  style={{textAlign:"center", marginTop:"50px"}} className="gutter-row" span={6}>
                                        <Card
                                        style={{fontSize:"30px"}}
                                           bordered={true}
                                            hoverable={true}
                                            cover={<img height={300} style={{padding:"40px"}} alt="example" src={e.image} />}>
                                            <Title level={3}> {e.title.substring(0, 12)}...</Title>
                                            <Title level={2} style={{fontWeight:"900px"}}>${e.price}</Title>
                                            <Button  type="primary" size="large" style={{background: "#fff", borderColor:"#000",color:"#000",borderRadius:"5px",}}>Buy Now</Button>
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
            <Header style={{background: "#fff"}}>
                <h1 style={{fontWeight:"bolder"}}>Latest Product</h1>
                <hr></hr>
            </Header>

            {length == undefined ? <> <Loading/></> : <ShowProducts />}
        </>
    )

}