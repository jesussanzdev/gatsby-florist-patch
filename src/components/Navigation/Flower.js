import React, { Component } from 'react'
import Title from '../Globals/Title'
import Img from 'gatsby-image'

const getCategories = items =>{
    let tempItems = items.map(items => {
        return items.node.category
    });
    // Get unique values 
    let tempCategories = new Set(tempItems);
    let categories = Array.from(tempCategories)
    categories = ['all',...categories]
    return categories;
}

export default class Flower extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            items: props.items.edges,
            flowerItems: props.items.edges,
            categories: getCategories(props.items.edges)
        };   
    }
    handleItems = category => {
        let tempItems = [...this.state.items];
        if (category === "all"){
            this.setState(()=>{
            return {flowerItems:tempItems}
            })
        }
        else{
            let items = tempItems.filter(({node})=>node.category === category);
            this.setState(()=>{
                return {flowerItems:items}
            })
        }
    };

    render() {

    if(this.state.items.length > 0){
        return (
            <section className="flower py-5">
                <div className="container">
                    <Title title="best of our flowers"/>
                    {/* categories */}
                    <div className="row mb-5">
                        <div className="col-10 mx-auto text-center">
                            {this.state.categories.map((category, index)=> {
                                return (
                                <button type="button" key={index} className="btn btn-green text-capitalize m-3"
                                onClick={() => {
                                    this.handleItems(category);
                                }}>
                                    {category}
                                </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* items */}
                    <div className="row">
                    {this.state.flowerItems.map(({node})=>{
                    return(
                    <div key={node.id} className="col-11 col-md-6 my-3 d-flex mx-auto">
                        <div>
                            <Img fixed={node.image.fixed} />
                        </div>
                        {/* item text */}
                        <div className="flex-grow-1 px-3">
                            <div className="d-flex justify-content-between">
                                <h6 className="mb-0">{node.title}</h6>
                                <h6 className="mb-0 text-green">${node.price}</h6>
                            </div>
                            <p className="text-muted">
                                <small>{node.about}</small>             
                            </p>
                        </div> 
                    </div>
                    );
                    })}
                    </div>
                </div>
            </section>
        );
    }
    else{
            return (<section className="flower py-5">
                <div className="container">
                    <Title title="best of our flowers" />
                    <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                        <h1>there are no items to display</h1>
                    </div>
                </div>
            </section>)
        }
    }
}
