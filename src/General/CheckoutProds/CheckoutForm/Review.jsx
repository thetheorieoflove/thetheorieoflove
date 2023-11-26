import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";

const Review =({ checkoutToken }) => {
    return(
        <>
        <Typography variant="h6" gutterBottom>Order Summary</Typography>
        <List disablePadding>
            {checkoutToken.line_items.map(( product ) => (
                 <ListItem style={{padding: '10px 0'}} key={product.name}>
                    <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`}></ListItemText>
                    <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
                 </ListItem>
            ))}            
            <ListItem style={{ padding: '10px 0'}}>
                <ListItemText primary="Total"></ListItemText>
                <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                    {checkoutToken.subtotal.formatted_with_symbol}
                </Typography>
            </ListItem>
        </List>
        </>
    )
}

export default Review;
