export function Produit({produit}) {

    const style = produit.stocked ? undefined : {color : 'red'}

    return<tr>
        <td style={style}>
            {produit.name}
        </td>
        <td>
            {produit.price}
        </td>
    </tr>
}