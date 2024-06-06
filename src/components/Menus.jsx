import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Dropdown, DropdownButton, Modal } from "react-bootstrap";
import Confetti from "react-confetti";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/menu.css";
import pizza from "../assets/pizza.jpg";
import juice from "../assets/juice.jpg";
import burger from "../assets/burger.jpg";
import chicken from "../assets/chicken.jpg";
import seafood from "../assets/seafood.jpg";
import fishfry from "../assets/fishfry.jpg";
import iral from "../assets/iral.jpg";
import legpiece from "../assets/legpiece.jpg";
import briyani from "../assets/briyani.jpg";
import kiwi from "../assets/kiwi.jpg";
import lemon from "../assets/lemon.jpg";
import pomegrante from "../assets/pomegrante.jpg";
import orieo from "../assets/orieo.jpg";
import papaya from "../assets/papaya.jpg";
import pineapple from "../assets/pineapple.jpg";
import strabeery from "../assets/strabeery.jpg";

const Menus = () => {
  const [displayMenu, setDisplayMenu] = useState("mainMenuItems");
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [confettiActive, setConfettiActive] = useState(false);
  
  const [mainMenuItems, setMainMenuItems] = useState([
    { name: "Pizza", image: pizza, price: "₹749", qty: 1, description: "Delicious cheese pizza with a crispy crust." },
    { name: "Fish Fry", image: fishfry, price: "₹199", qty: 1, description: "Crispy fried fish served with tartar sauce." },
    { name: "Burger", image: burger, price: "₹499", qty: 1, description: "Juicy beef burger with lettuce, tomato, and cheese." },
    { name: "Chicken", image: chicken, price: "₹349", qty: 1, description: "Grilled chicken with herbs and spices." },
    { name: "Seafood", image: seafood, price: "₹849", qty: 1, description: "A variety of fresh seafood, cooked to perfection." },
    { name: "Iral", image: iral, price: "₹599", qty: 1, description: "Spicy prawn curry with coconut milk." },
    { name: "Briyani", image: briyani, price: "₹499", qty: 1, description: "Flavorful rice dish with meat and spices." },
    { name: "Leg Piece", image: legpiece, price: "₹119", qty: 1, description: "Tender chicken leg piece, marinated and fried." },
  ]);

  const [juiceItems, setJuiceItems] = useState([
    { name: "Grapes", image: juice, price: "₹119", qty: 1, description: "Freshly squeezed grape juice." },
    { name: "Kiwi", image: kiwi, price: "₹149", qty: 1, description: "Kiwi juice with a hint of lime." },
    { name: "Lemon", image: lemon, price: "₹39", qty: 1, description: "Refreshing lemon juice." },
    { name: "Papaya", image: papaya, price: "₹99", qty: 1, description: "Papaya juice rich in vitamins." },
    { name: "Pomegranate", image: pomegrante, price: "₹129", qty: 1, description: "Antioxidant-rich pomegranate juice." },
    { name: "Oreo", image: orieo, price: "₹59", qty: 1, description: "Creamy Oreo milkshake." },
    { name: "Strawberry", image: strabeery, price: "₹89", qty: 1, description: "Sweet and tangy strawberry juice." },
    { name: "Pineapple", image: pineapple, price: "₹129", qty: 1, description: "Tropical pineapple juice." },
  ]);

  const navigate = useNavigate();

  const toggleDisplayMenu = (menuType) => {
    setDisplayMenu(menuType);
  };

  const handleQtyChange = (menuType, index, qty) => {
    if (menuType === "mainMenuItems") {
      const newItems = [...mainMenuItems];
      newItems[index].qty = qty;
      setMainMenuItems(newItems);
    } else {
      const newItems = [...juiceItems];
      newItems[index].qty = qty;
      setJuiceItems(newItems);
      }
  };

  const handleBuyNow = (menuType, index) => {
    let selectedItem;
    if (menuType === "mainMenuItems") {
      selectedItem = mainMenuItems[index];
    } else {
      selectedItem = juiceItems[index];
    }

    const totalPrice = parseFloat(selectedItem.price.replace("₹", "")) * selectedItem.qty;

    setConfettiActive(true);
    setTimeout(() => {
      setConfettiActive(false);
      navigate("/checkout", {
        state: { items: [selectedItem], totalPrice: `₹${totalPrice.toFixed(2)}` },
      });
    }, 3000);
  };

  const handleShowDescription = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  const renderMenuItems = (items, menuType) => (
    <Row>
      {items.map((item, index) => (
        <Col lg={3} md={6} sm={12} key={index} className="mb-4">
          <Card className="h-100">
            <Card.Img variant="top" src={item.image} alt={item.name} />
            <Card.Body>
              <Card.Title onClick={() => handleShowDescription(item)} style={{ cursor: "pointer", color: "blue" }}>
                {item.name}
              </Card.Title>
              <div className="d-flex justify-content-between">
                <DropdownButton
                  id={`dropdown-basic-button-${index}`}
                  title={`Qty: ${item.qty}`}
                  onSelect={(e) => handleQtyChange(menuType, index, parseInt(e))}
                >
                  {[1, 2, 3, 4, 5].map((qty) => (
                    <Dropdown.Item key={qty} eventKey={qty}>
                      {qty}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
                <button
                  style={{
                    backgroundColor: "red",
                    borderRadius: "5px",
                    border: "none",
                    marginLeft: "10px",
                  }}
                  className="me-2"
                >
                  {item.price}
                </button>
                <Button
                  variant="success"
                  className="me-2"
                  onClick={() => handleBuyNow(menuType, index)}
                >
                  Buy Now
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );

  return (
    <div className="menubg w-100">
      <Container fluid>
        {confettiActive && <Confetti />}
        <div className="menucenter">
          <div className="d-flex justify-content-between align-items-start">
            <h2 className="section-title" onClick={() => toggleDisplayMenu("mainMenuItems")}>
              Main Menu Items
            </h2>
            <h2 className="section-title" onClick={() => toggleDisplayMenu("juiceItems")}>
              Juice Items
            </h2>
          </div>
          {displayMenu === "mainMenuItems" && renderMenuItems(mainMenuItems, "mainMenuItems")}
          {displayMenu === "juiceItems" && renderMenuItems(juiceItems, "juiceItems")}
        </div>
      </Container>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedItem?.image} alt={selectedItem?.name} className="img-fluid mb-3" />
          <p>{selectedItem?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Menus;
