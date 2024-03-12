const food = [
  {
    id: 1,
    name: "Vi Cá Mập",
    image: "./img/vi_ca.jpg",
    price: "250.000",
    quantity: "99",
  },

  {
    id: 2,
    name: "Bò Kobe",
    image: "./img/bo_kobe.jpg",
    price: "398.000",
    quantity: "99",
  },

  {
    id: 3,
    name: "Cua Hoàng Đế",
    image: "./img/cua.jpg",
    price: "300.000",
    quantity: "99",
  },

  {
    id: 4,
    name: "Trứng Cá Tằm",
    image: "./img/trung_ca.jpg",
    price: "400.000",
    quantity: "99",
  },
];
const drink = [
  {
    id: 1,
    name: "Billionaire Vodka",
    image: "./img/voka.jpg",
    price: "250.000",
    quantity: "99",
  },

  {
    id: 2,
    name: "Isabella’s Islay ",
    image: "./img/isa.jpg",
    price: "398.000",
    quantity: "99",
  },

  {
    id: 3,
    name: "The Eye of the Dragon",
    image: "./img/dragon.jpg",
    price: "300.000",
    quantity: "99",
  },

  {
    id: 4,
    name: "Tequila Ley",
    image: "./img/ley.jpg",
    price: "400.000",
    quantity: "99",
  },
];

function Food() {
  var html = "";
  for (i in food) {
    html + "<tr>";
    html += "<td>" + food[i].id + "</td>";
    html += "<td>" + food[i].name + "</td>";
    html +=
      "<td><img src=" + food[i].image + " style=height:50px;width:50px></td>";
    html += "<td>" + food[i].price + "</td>";
    html += "<td>" + food[i].quantity + "</td>";
    html += "<td><button class='edit-btn' onclick='editProduct(" + i + ")'>Edit</button></td>";
    html += "<td><button class='delete-btn' onclick='confirmDelete(" + i + ")'>Delete</button></td>";
    html += "</tr>";
    document.getElementById("tbl").innerHTML = html;
  }
}
function Drink() {
  var html = "";
  for (i in drink) {
    html + "<tr>";
    html += "<td>" + drink[i].id + "</td>";
    html += "<td>" + drink[i].name + "</td>";
    html +=
      "<td><img src=" + drink[i].image + " style=height:50px;width:50px></td>";
    html += "<td>" + drink[i].price + "</td>";
    html += "<td>" + drink[i].quantity + "</td>";
    html += "<td><button class='edit-btn' onclick='editProduct(" + i + ")'>Edit</button></td>";
    html += "<td><button class='delete-btn' onclick='confirmDelete(" + i + ")'>Delete</button></td>";
    html += "</tr>";
  }

  document.getElementById("tbl").innerHTML = html;
}

function create() {
  var ID = document.getElementById("id").value;
  var Name = document.getElementById("name").value;
  var Image = document.getElementById("img").value;
  var Price = document.getElementById("price").value;
  var Quantity = document.getElementById("quantity").value;
  var Select = document.getElementById("Select").value;

  var newProduct = {
    id: ID,
    name: Name,
    image: Image,
    price: Price,
    quantity: Quantity,
  };

  if (Select === "food") {
    food.push(newProduct);
  } else if (Select === "drink") {
    drink.push(newProduct);
  }

  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("img").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";

  show(Select === "food" ? arr : drink);
}

function editProduct(index) {
  document.getElementById("editProductName").value = food[index].name;
  document.getElementById("editProductImage").value = food[index].image;
  document.getElementById("editProductPrice").value = food[index].price;
  document.getElementById("editProductQuantity").value = food[index].quantity;
  
  document.getElementById("editForm").style.display = "block";
  document.getElementById("editIndex").value = index;
}

function updateProduct() {
  var newName = document.getElementById("editProductName").value;
  var newImage = document.getElementById("editProductImage").value;
  var newPrice = document.getElementById("editProductPrice").value;
  var newQuantity = document.getElementById("editProductQuantity").value;

  var indexToUpdate = parseInt(
    document.getElementById("editIndex").value
  );
  food[indexToUpdate].name = newName;
  food[indexToUpdate].image = newImage;
  food[indexToUpdate].price = newPrice;
  food[indexToUpdate].quantity = newQuantity;

  document.getElementById("editForm").style.display = "none";

  Food(); // Cập nhật lại bảng sản phẩm Food sau khi cập nhật sản phẩm
}

function confirmDelete(index) {
  // Xác nhận việc xóa sản phẩm
  if (confirm("Bạn có chắc chắn muốn xóa sản phẩm có ID " + food[index].id + "?")) {
    // Xóa sản phẩm khỏi mảng 'food'
    food.splice(index, 1);
    // Cập nhật bảng sản phẩm Food
    Food();
  }
}