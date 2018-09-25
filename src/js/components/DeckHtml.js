import React, { Fragment } from 'react';

// -- Static component (HTML ONLY) ---

const DeckHtml = () => (
        <Fragment>
          {/* <!-- Beginning Deck---> */}
          <div className="box">
            <div className="card">
              <img src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695" alt=""></img>
            </div>
            <div className="card">
              <img src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695" alt=""></img>
            </div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
          {/* <!--- End of deck----> */}
        </Fragment>
    );
   
export default DeckHtml;
