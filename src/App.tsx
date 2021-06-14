import { Grid } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, openDrawer } from "./actions";
import Item from "./components/Item";
import { IState } from "./reducers/reducerInterfaces";
import { makeStyles } from "@material-ui/core/styles";
import LinerProgress from "@material-ui/core/LinearProgress";
import styled from "styled-components";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Drawer from "@material-ui/core/Drawer";
import Cart from "./components/Cart";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 1200,
  },
}));

const Wrapper = styled.div`
  margin: 50px;
  display: flex;
  justify-content: center;
`;

const StyledBadgeWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
`;

const App = () => {
  const products = useSelector((state: IState) => state.mainReducer.items);
  const loading = useSelector((state: IState) => state.mainReducer.loading);
  const drawer = useSelector((state: IState) => state.mainReducer.drawer);
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return loading ? (
    <LinerProgress />
  ) : (
    <>
      <Drawer
        anchor="right"
        open={drawer}
        onClose={() => dispatch(openDrawer(false))}
      >
        hello hello
        <Cart />
      </Drawer>
      <StyledBadgeWrapper>
        <IconButton
          aria-label="cart"
          onClick={() => dispatch(openDrawer(true))}
        >
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </StyledBadgeWrapper>
      <Wrapper>
        <Grid container spacing={6} className={classes.root}>
          {products.map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item {...item} />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </>
  );
};

export default App;
