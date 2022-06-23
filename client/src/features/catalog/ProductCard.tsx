import { ListItem, ListItemAvatar, Avatar, ListItemText, Button, Card, CardActions, CardContent, CardMedia, Typography, CardHeader } from "@mui/material";
import { Product } from "../../app/models/product";

interface Props {
    product: Product;
}
export default function ProductCard({product}: Props){
    return(

        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{bgcolor:'secondary.main'}}>
                {product.name.charAt(0).toUpperCase()}
              </Avatar>
            }
            title={product.name}
            titleTypographyProps={{
              sx:{fontWeight:'bold',color:'primary.main'}
            }}
          />
        <CardMedia         
          component="img" 
          height="140"                
          image={product.pictureUrl}
          sx={{WebkitBackgroundSize:'contain', backgroundSize:'contain', backgroundRepeat:'no-repeat' }}       
        
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {(product.price/100).toFixed(2)}TL
          </Typography>
          <Typography variant="body2" color='secondary'>
          {product.brand} / {product.type}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Sepete Ekle</Button>
          <Button size="small">Detay</Button>
        </CardActions>
      </Card>


    //     <ListItem key={product.name + product.id}>
    //     <ListItemAvatar>
    //       <Avatar src={product.pictureUrl}></Avatar>
    //     </ListItemAvatar>
    //     <ListItemText>
    //       {product.name} - {product.price}
    //     </ListItemText>
    //   </ListItem>
    )
}