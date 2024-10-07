
import './style.css';

const DesignElements = () => {
    return (
        <section className='main-spacing-x'>
            <div className='py-3' />
            <div className='article-title-backdrop py-4 p-3'>
                <h2 className='font-family-quicksand text-medium'>Introduction to Visual Design - Design Elements</h2>
                <div className='py-1' />
                <p className='white'><span>Date: 6 October, 2024</span> <span>Tags: Visual Design, Introduction, Design Elements</span></p>
            </div>
            <div className='article-contents-main px-0 px-sm-2 px-md-4 px-lg-5'>
                <div className='py-3' />
                <div>
                <h4 className='font-family-quicksand gray-2 text-semibold'>What is design?</h4>
                <p className='py-2 text-medium gray-4'>The term design is used in many contexts. From architecture and structural design, to fashion, to information technology, infographics, presentation, branding and strategy, Product, Advertising, Layout design.
                <br />Some things can be picked out as common to all these areas listed. Design is created for a purpose. Every design is made to fulfill a goal. Architectural designs would one day be a majestic building, presentations would serve the purpose of enlightenment, product designs serve to showcase new products to end users. Every design serves a purpose. Another thing all designs have in common is that they all start from the imagination. Designs are first ideas, then rough sketches, then they undergo several more process of refinement before being ready to be presented as finished work.</p>
                <p className='py-2 text-medium gray-4'>
                All design however have building block. This building blocks are the components that are put together to build the design. Each component individually may not be much on their own. But together, they create complex and aesthetically pleasing visual compositions. These components are called the design element.
                </p>
                </div>
            </div>
        </section>
    );
};

export default DesignElements;