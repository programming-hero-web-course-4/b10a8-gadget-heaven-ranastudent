import { toast } from "react-toastify";

const getStoreCartList = ()=>{
    const storedListStr = localStorage.getItem('cart-list');
    if(storedListStr){
      const storedList = JSON.parse(storedListStr);
      return storedList
    }
    else{
      return [];
    }  
}
const getStoreWishList = ()=>{
    const storedListStr = localStorage.getItem('wish-list');
    if(storedListStr){
      const storedList = JSON.parse(storedListStr);
      return storedList
    }
    else{
      return [];
    }  
}

const addToStoreCartList = (id)=>{
      const storedList = getStoreCartList();
      if (storedList.includes(id)) {
            toast.warning('already exsits in cart list')
      }
      else{
            storedList.push(id);
            const storedListStr = JSON.stringify(storedList);
            localStorage.setItem('cart-list', storedListStr )
            toast.success('add to cart list')
      }
}
const addToStoreWishList = (id)=>{
      const storedList = getStoreWishList()
      if (storedList.includes(id)) {
            toast.warning('already exsits in Wish list')
      }
      else{
            storedList.push(id);
            const storedListStr = JSON.stringify(storedList);
            localStorage.setItem('wish-list', storedListStr )
            toast.success('add wish list')
      }
}

export {addToStoreCartList, addToStoreWishList, getStoreCartList, getStoreWishList }