const Product = () => {
    return <li>My product</li>
}

const ShoppingList = () => {
    return (
    <ul>
        <Product/>
    </ul>
    )

}

const App = () => {
    return (
        <div>
            <h1>Hi from React!</h1>
            < ShoppingList />

        </div>

    )
}

const ourDiv = document.querySelector(".root");
ReactDOM.render(<App /> , ourDiv)