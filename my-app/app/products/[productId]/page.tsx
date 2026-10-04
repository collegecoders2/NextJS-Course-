export default async function ProductDetailedPage({params}:{params:
    Promise<{productId:string}>
}){

    const productId= (await params).productId
    return(
        <div>
          <h1>product {productId} detailed page</h1>
        </div>
    )
}