export function ProductRows({product}) {

    const style = product.stocked ? undefined : {color : "red"};

    return<tr className="text-center">
        <td style={style}>{product.name}</td>
        <td>{product.price}</td>
    </tr>
}