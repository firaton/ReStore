import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface Props {
  product: Product;
}
export default function ProductCard({ product }: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "secondary.main" }}>
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.name}
        titleTypographyProps={{
          sx: { fontWeight: "bold", color: "primary.main" },
        }}
      />
      <CardMedia
        component="img"
        height="140"
        image={product.pictureUrl}
        sx={{
          WebkitBackgroundSize: "contain",
          backgroundSize: "contained",
          backgroundRepeat: "no-repeat",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {(product.price / 100).toFixed(2)}TL
        </Typography>
        <Typography variant="body2" color="secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">        
          <Box display="flex" alignItems="center">
            <ShoppingBasketIcon fontSize="small" />
            Sepete Ekle
          </Box>
        </Button>

        {/**Backtick karakterini altgr ve virgül tuşuna basasrak yapıyoruz.  `/catalog/+product.id` ile aynı */}
        <Button size="small" component={Link} to={`/catalog/${product.id}`}>
         <Box display="flex" alignItems="center"><VisibilityIcon fontSize="small"/>Detay</Box>
        </Button>
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
  );
}
