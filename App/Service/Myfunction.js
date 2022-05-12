import HttpClient from '@Utils/HttpClient'

function Category(data){
    let endpoint = 'fetch_category.php';
    return HttpClient.post(endpoint,data);
}
function fetchForm(data){
    let endpoint = 'fetch_form.php';
    return HttpClient.post(endpoint,data);
}
function AddForm(data){
    let endpoint = 'submit_form.php';
    return HttpClient.post(endpoint,data)
}
// function AddForm(data){
//     let endpoint = 'submit_form.php';
//     return HttpClient.post(endpoint,data)
// }
function FetchProfile(data){
    let endpoint = 'fetch_profile.php';
    return HttpClient.post(endpoint,data);
}

function UpdProfile(data){
    let endpoint = 'edit_profile.php';
    return HttpClient.post(endpoint,data);
}
function Fetchsubscription(data){
    let endpoint = 'fetch_subscription.php';
    return HttpClient.post(endpoint,data);
}
function Buysubscription(data){
    let endpoint = 'buy_subscription.php';
    return HttpClient.post(endpoint,data);
}
function FetchInventory(data){
    let endpoint = 'self_post_item.php';
    return HttpClient.post(endpoint,data);
}

function uploadImage(data){
    let endpoint = 'upload_image.php';
    return HttpClient.upload(endpoint,'POST',data);
}
function DeleteItem(data){
    let endpoint = 'delete_product.php';
    return HttpClient.post(endpoint,data);
}
function PostItem(data){
    let endpoint = 'main_submit.php';
    return HttpClient.post(endpoint,data);
}

function MyPosts(data){
    let endpoint = 'mmy_product.php';
    return HttpClient.post(endpoint,data);
}
function MyPostsDelete(data){
    let endpoint = 'mpro_delete.php';
    return HttpClient.post(endpoint,data);
}

function CatPost(data){
    let endpoint = 'fetch_cat_product.php';
    return HttpClient.post(endpoint,data);
}

function ProductPreview(data){
    let endpoint = 'product_preview.php';
    return HttpClient.post(endpoint,data);
}

function UserDetails(data){
    let endpoint = 'user_address.php';
    return HttpClient.post(endpoint,data);
}

function EditItem(data){
    let endpoint = 'item_edit.php';
    return HttpClient.post(endpoint,data)
}

function FetchShop(data){
    let endpoint = 'fetch_shop.php';
    return HttpClient.post(endpoint,data)
}

function MatchPw(data){
    let endpoint = 'match_password.php';
    return HttpClient.post(endpoint,data)
}

function NewPass(data){
    let endpoint = 'new_password.php';
    return HttpClient.post(endpoint,data)
}

function ViewBanner(data){
    let endpoint = 'fetch_banner.php';
    return HttpClient.post(endpoint,data)
}

function HomeCat(data){
    let endpoint = 'fetch_catslider.php';
    return HttpClient.post(endpoint,data)
}

function CatNine(data){
    let endpoint = 'cat9.php';
    return HttpClient.post(endpoint,data)
}

function CatEighteen(data){
    let endpoint = 'cat18.php';
    return HttpClient.post(endpoint,data)
}

function MyPostEdit(data){
    let endpoint = 'mpro_edit.php';
    return HttpClient.post(endpoint,data)
}

function SellForm(data){
    let endpoint = 'shop_sell.php';
    return HttpClient.post(endpoint,data)
}
function MultiImg(data,obj){
    let endpoint = 'sell_image.php';
    return HttpClient.upload(endpoint,'post',data,obj)
}

export default {
    Category,
    fetchForm,
    AddForm,
    FetchProfile,
    UpdProfile,
    Fetchsubscription,
    Buysubscription,
    FetchInventory,
    uploadImage,
    DeleteItem,
    PostItem,
    MyPosts,
    MyPostsDelete,
    CatPost,
    ProductPreview,
    UserDetails,
    EditItem,
    FetchShop,
    MatchPw,
    NewPass,
    ViewBanner,
    HomeCat,
    CatNine,
    CatEighteen,
    MyPostEdit,
    SellForm,
    MultiImg
}