import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";
import products from "../assets/fake-date/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";

import "../styles/all-foods.css";
import "../styles/pagination.css";

const AllFoods = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [pageNumber, setPageNumber] = useState(0);
    const [sortedProducts, setSortedProducts] = useState([]);
    const [selectedOption, setSelectedOption] = useState("default");

    const productPerPage = 12;
    const visitedPage = pageNumber * productPerPage;
    const displayPage = sortedProducts.slice(
        visitedPage,
        visitedPage + productPerPage
    );

    const pageCount = Math.ceil(sortedProducts.length / productPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const handleSortChange = (e) => {
        const value = e.target.value;
        setSelectedOption(value);
    };

    useEffect(() => {
        let sorted = [...products];
        switch (selectedOption) {
        case "ascending":
            sorted.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case "descending":
            sorted.sort((a, b) => b.title.localeCompare(a.title));
            break;
        // Add more cases for other sorting options (high-price, low-price, etc.) if needed
        default:
            // Default case: no sorting (retain the original order)
            break;
        }
        setSortedProducts(sorted);
    }, [selectedOption]);

    useEffect(() => {
        const filtered = products.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSortedProducts(filtered);
        setPageNumber(0); // Reset page number when search term changes
    }, [searchTerm]);

    return (
        <Helmet title="All-Foods">
        <CommonSection title="All Foods" />

        <section>
            <Container>
            <Row>
                <Col lg="6" md="6" sm="6" xs="12">
                <div className="search__widget d-flex align-items-center justify-content-between ">
                    <input
                    type="text"
                    placeholder="I'm looking for...."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <span>
                    <i className="ri-search-line"></i>
                    </span>
                </div>
                </Col>
                <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
                <div className="sorting__widget text-end">
                    <select
                    className="w-50"
                    value={selectedOption}
                    onChange={handleSortChange}
                    >
                    <option value="default">Default</option>
                    <option value="ascending">Alphabetically, A-Z</option>
                    <option value="descending">Alphabetically, Z-A</option>
                    {/* Add other sorting options if needed */}
                    </select>
                </div>
                </Col>

                {displayPage.map((item) => (
                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                    <ProductCard item={item} />
                </Col>
                ))}

                <div>
                <ReactPaginate
                    pageCount={pageCount}
                    onPageChange={changePage}
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    containerClassName="paginationBttns"
                />
                </div>
            </Row>
            </Container>
        </section>
        </Helmet>
    );
};

export default AllFoods;
