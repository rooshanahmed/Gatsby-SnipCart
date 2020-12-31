import React from "react"

export default function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
      <button
        className="snipcart-add-item"
        data-item-id="formal-shoe"
        data-item-price="30"
        data-item-description="High-Qulality Shoe in best price"
        data-item-url="/"
        data-item-image="https://media.thecustommovement.com/308274c7-efad-4f60-910b-fe1d7851d40c"
        data-item-name="The Starry Night"
      >
        Checkout
      </button>
    </div>
  )
}
