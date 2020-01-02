import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { PageHeader } from "antd";
import { Tooltip, Menu, Icon, Dropdown, Button,List, Input } from "antd";
import { Layout } from "antd";
import { Row, Col } from "antd";

import SearchField from "react-search-field";
import { Card } from "antd";
const { Header, Sider ,Footer, Content } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;

const menu3 = (
  <div>
    <Row>
      <Col span={8}>
        <div> Prix : 100 $ </div>

        <div class="hover-menu">
          <img className="drop-img" alt="" src="4.png" />
          <div class="fadedbox">
            <div class="title text">Womens burnt orange casual tee £29.95</div>
            <h4>
              {" "}
              Classic casual t-shirt for women on the move. 100% cotton.{" "}
            </h4>
            <Tooltip title="Shop-now">
              <Button type="default">
                <Icon type="shopping-cart" />
              </Button>
            </Tooltip>
            <Tooltip title="like it">
              <Button type="default">
                <Icon type="heart" />
              </Button>
            </Tooltip>
            <Tooltip title="reduce">
              <Button type="default">
                <Icon type="shrink" />
              </Button>
            </Tooltip>
          </div>
        </div>
      </Col>
      <Col span={8} offset={8}>
        <div> Prix : 85 $ </div>
        <div class="hover-menu">
          <img alt="" className="drop-img" src="3.png" />
          <div class="fadedbox">
            <div class="title text">Womens burnt orange casual tee £29.95</div>
            <h4>
              {" "}
              Classic casual t-shirt for women on the move. 100% cotton.{" "}
            </h4>
            <Button>
              <Icon type="shopping-cart" />
            </Button>
            <Button>
              <Icon type="heart" />
            </Button>
            <Button>
              <Icon type="shrink" />
            </Button>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col span={6} offset={6}>
        <div> Prix : 76 $ </div>
        <img alt="" className="drop-img" src="2.png" />{" "}
      </Col>
      <Col span={6} offset={6}>
        <div> Prix : 32 $ </div>
        <img alt="" className="drop-img" src="5.png" />{" "}
      </Col>
    </Row>
    <Row>
      <Col span={12} offset={6}>
        <div> Prix : 130 $ </div>
        <img alt="" className="drop-img" src="6.png" />{" "}
      </Col>
    </Row>
  </div>
);

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        TND
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        EURO
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        DOLLAR
      </a>
    </Menu.Item>
  </Menu>
);
const menu1 = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        your buy list is empty
      </a>
    </Menu.Item>
  </Menu>
);

class Home extends React.Component {
  render() {
    return (
      
        <Layout>
          <Header className="page-header">
            <PageHeader className="page-header">
              <Dropdown overlay={menu} placement="bottomLeft">
                <Button>
                  Currency
                  <Icon type="down" />
                </Button>
              </Dropdown>
              <Button className="signin-btn" ghost>
                signin
              </Button>
              <Button className="signup-btn">signup</Button>
              <Dropdown
                className="buy-list"
                overlay={menu1}
                placement="bottomLeft"
              >
                <Button className="shop-btn">
                  <Icon type="shopping-cart" />
                  empty
                  <Icon type="down" />
                </Button>
              </Dropdown>
            </PageHeader>
          </Header>

          <Content>
            <span className="brand-name"> AVENUE FASHION </span>

            <Menu className="nav-menu" mode="horizontal">
              <SubMenu
                title={
                  <span className="submenu-title-wrapper">
                    MENS
                    <Icon type="down" />
                  </span>
                }
              >
                <Menu.ItemGroup title="CASUAL">
                  <Menu.Item>Jackets</Menu.Item>
                  <Menu.Item>Hoodies & Sweatshirts</Menu.Item>
                  <Menu.Item>Polo</Menu.Item>
                  <Menu.Item>Shirts</Menu.Item>
                  <Menu.Item>Sportswear</Menu.Item>
                  <Menu.Item>Trousers</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="FORMEL">
                  <Menu.Item>Jackets</Menu.Item>
                  <Menu.Item>Shirts</Menu.Item>
                  <Menu.Item>Suits</Menu.Item>
                  <Menu.Item>Trousers</Menu.Item>

                  <Menu.Item className="pub">
                    Autumn sale! up to 50% off
                  </Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu
                title={
                  <span className="submenu-title-wrapper">
                    WOMENS
                    <Icon type="down" />
                  </span>
                }
              >
                <Menu.ItemGroup title="Item 1">
                  <Menu.Item>Option 1</Menu.Item>
                  <Menu.Item>Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                  <Menu.Item>Option 3</Menu.Item>
                  <Menu.Item>Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu
                title={
                  <span className="submenu-title-wrapper">
                    THE BRAND
                    <Icon type="down" />
                  </span>
                }
              >
                <Menu.ItemGroup title="Item 1">
                  <Menu.Item>Option 1</Menu.Item>
                  <Menu.Item>Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                  <Menu.Item>Option 3</Menu.Item>
                  <Menu.Item>Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu
                title={
                  <span className="submenu-title-wrapper">
                    LOCAL STORES
                    <Icon type="down" />
                  </span>
                }
              >
                <Menu.ItemGroup title="Item 1">
                  <Menu.Item>Option 1</Menu.Item>
                  <Menu.Item>Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                  <Menu.Item>Option 3</Menu.Item>
                  <Menu.Item>Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu
                title={
                  <span className="submenu-title-wrapper">
                    LOOK BOOK
                    <Icon type="down" />
                  </span>
                }
              >
                <Menu.ItemGroup title="Item 1">
                  <Menu.Item>Option 1</Menu.Item>
                  <Menu.Item>Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                  <Menu.Item>Option 3</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SearchField placeholder="Search..." classNames="test-class" />
            </Menu>
            <div className="container">
              <img className="image1" alt="" src="photo@1X.png" />
              <div className="centered"> A V E </div>
              <div className="bottom-right">SHOP MEN'S COLLECTION</div>
            </div>
            <br />
            <container>
              <div className="gutter-example">
                <Row gutter={16}>
                  <Col className="gutter-row" span={4}>
                    <div className="gutter-box">
                      <Dropdown overlay={menu3} placement="bottomLeft">
                        <Button>POPULAR</Button>
                      </Dropdown>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <div className="gutter-box">
                      <Dropdown overlay={menu3} placement="bottomLeft">
                        <Button>NEW ARRIVALS</Button>
                      </Dropdown>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <div className="gutter-box">
                      <Dropdown overlay={menu3} placement="bottomLeft">
                        <Button>BEST SELLERS</Button>
                      </Dropdown>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <div className="gutter-box">
                      <Dropdown overlay={menu3} placement="bottomLeft">
                        <Button>SPECIAL OFFERS</Button>
                      </Dropdown>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={4}>
                    <div className="gutter-box">
                      <Dropdown overlay={menu3} placement="bottomLeft">
                        <Button>COMING SOON</Button>
                      </Dropdown>
                    </div>
                  </Col>
                </Row>
              </div>
              
            </container>

            
            <Row type="flex" justify="space-between">
            
            <Col span={ 8} >
      <Layout>
        <Sider className="sider">
          <img className="sider-img" alt="" src="9.png" />
        </Sider>
        
         
        <Content>
          <h1> MEN'S LOOKBOOK </h1>
          <p> Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu.
 </p>
 <Button type="primary">VIEW NOW</Button>
        </Content>
        
      </Layout>
      </Col>
      <Col span={ 8} >
      <Layout>
        <Sider className="sider">
          <img className="sider-img" alt="" src="8.png" />
        </Sider>
        
         
        <Content>
          <h1> WOMEN'S LOOKBOOK </h1>
          <p> Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu.
 </p>
 <Button type="primary">VIEW NOW</Button>
        </Content>
        
      </Layout>
      </Col>
      <Col span={ 8} >
      <Layout>
        <Sider className="sider">
          <img className="sider-img" alt="" src="1.png" />
        </Sider>
        
         
        <Content>
          <h1> YOUR  LOOKBOOK </h1>
          <p> Lorem ipsum dolor sit amet eras facilisis
consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
Elementum metus facilisis ut phasellu.
 </p>
 <Button type="primary">VIEW NOW</Button>
        </Content>
        
      </Layout>
      </Col>
      
    
    </Row>
    <br/>
    <br/>
    <br/>
    <br/>
    
    <Row type="flex" justify="space-between">
      <Col span={4}>
        <h1> INFORMATION </h1>
        <div> 
        <ul> 
        <li> The brand </li>
        <li> Local stores </li>
        <li> Customer service </li>
        <li> Privacy & cookies </li>
        <li> Site </li>         
      </ul>
        </div>
      </Col>
      <Col span={4}>
      <h1> WHY BUY FROM US </h1>    
      <div> 
        <ul> 
        <li> Shipping & returns </li>
        <li> Secure shopping </li>
        <li>  Testimonials </li>
        <li> Award winning </li>
        <li> Ethical trading </li>         
      </ul>
        </div>
      </Col>
      <Col span={4}>
      <h1> YOUR ACCOUNT </h1>
      </Col>
      <Col span={4}>
      <h1> LOOKBOOK </h1>
      </Col>
      <Col span={4}>
      <h1> CONTACT DETAILS </h1>
      </Col>
    </Row>
    <Row gutter={[16, 16]}>
  <Col className="award-winner" span={12} > 
  <h1> AWARD WINNER </h1>
  <h1> FASHION AWARDS 2019 </h1>
   </Col>
  <Col className="social-media" span={12} > 
  <Icon type="facebook" />
  <Icon type="twitter" />
  <Icon type="instagram" />
   </Col>
</Row>


          </Content>
          <br/>
          <br/>
          <Footer className="footer">© 2016 Avenue Fashion™      </Footer>
        </Layout>
        
    );
  }
}
export default Home;
