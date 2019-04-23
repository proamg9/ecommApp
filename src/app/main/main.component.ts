import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../service/authentication.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
     selector: 'app-main',
     templateUrl: './main.component.html',
     styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
     category: any = {};
     product: any = {};
     allcategory: any = {};
     allproduct: any = {};
     sel_category: any;
     sel_product:any;

     constructor(private auth: AuthenticationService, private flashM: FlashMessagesService) {
          this.fill_parent_category();

          // set pusher-module bind (this is websocket implement)
          this.auth.channel.bind('send-change', data => {

               if (data.status == 'categorychange') {
                    this.fill_parent_category();
                    this.flashM.show(' Categories updated', {cssClass : 'alert-danger'});
               }else if(data.status == 'productchange') {
                 this.flashM.show(' Products Updated', {cssClass : 'alert-danger'});
                    this.load_product();
               }
          });
         // console.log(this.auth.getUserDetails().email);

     }

     ngOnInit() {
          $("#user").html("Logged in as " + this.auth.getUserDetails().email);
      }

// load category_data from mongodb
     fill_parent_category() {
          this.auth.getallcategory().subscribe(res => {
               this.allcategory = res;
               var cat_list = "";
               for (var i = 0; i < this.allcategory.length; i++) {
                    cat_list = cat_list + "<option value='" + this.allcategory[i]._id + "'>" + this.allcategory[i].category_name + "</option>";
               }
               $("#parent_id").html(cat_list);
               $("#edit_parent_id").html(cat_list);

               this.make_treeview();
          }, (err) => {
               console.error(err);
          });
     }

// make category _tree with json_data (from db category)
make_treeview() {
   var self=this;
   var tmp_data=JSON.stringify(this.list_to_tree(this.allcategory));
   var tree_str=tmp_data.replace(/\"nodes\":\[\],/g,'');
   var tree_data=JSON.parse(tree_str);
   (<any>$('#category-tree')).treeview({
        data: tree_data,
        levels: 10,// set tree levels
        expandIcon: 'fa fa-plus',
        collapseIcon: 'fa fa-minus',
        emptyIcon: 'fa',
        nodeIcon: '',
        selectedIcon: '',
        checkedIcon: 'glyphicon glyphicon-check',
        uncheckedIcon: 'glyphicon glyphicon-unchecked',
        color: undefined, // '#000000',
        backColor: undefined, // '#FFFFFF',
        borderColor: '#dddddd', // '#dddddd',
        onhoverColor: '#F5F5F5',
        enableLinks: false,
        highlightSelected: true,
        showBorder: true,
        showIcon: true,
   });

   (<any>$('#category-tree')).on('nodeSelected', function (event, data) {
        self.sel_category = data;
        self.sel_product="0";
        //console.log("current Category", self.sel_category);
        self.load_product();

   });
}
     // implement tree - recursive call
     list_to_tree(list) {
          var map = {}, node, roots = [], i;
          for (i = 0; i < list.length; i += 1) {
               map[list[i]._id] = i; // initialize the map
               list[i].nodes = []; // initialize the children
               list[i].text = list[i].category_name;
          }

          for (i = 0; i < list.length; i += 1) {
               node = list[i];

               if (node.parent_id != "0") {
                    list[map[node.parent_id]].nodes.push(node);
               } else {
                    roots.push(node);
               }
          }
          return roots;
     }

// if user selects a category, load products in selected category
     load_product() {
          var self=this;

          var product_list;
          if (this.sel_category == '') {
               alert(' Please Select the Category');
          }
          else {
               this.category.id = this.sel_category['_id'];

               this.auth.getproduct(this.category).subscribe(res => {
                    console.log('product list', res);
                    this.allproduct = res;
                    product_list = "";
                    for (var i = 0; i < this.allproduct.length; i++) {
                         product_list = product_list + "<button class='list-group-item list-group-item-action product_list' id='"+this.allproduct[i]._id+"' > " + this.allproduct[i].product_name ;
                         if (this.allproduct[i].keywords.length>0)
                              product_list =product_list +"<span class='keywords'>(" +  this.allproduct[i].keywords +")</span>" ;

                         product_list =product_list +"</button>";
                    }
                    $("#product_list").html(product_list);
                    $('.product_list').on("click", function(e){
                         self.sel_product = e.target.id;
                         console.log(self.sel_product);
                    })
               }, (err) => {
                    console.error(err);
               });
          }
     }
// open change -category dialog
     editmodal()     {
          if (this.sel_category == undefined){
               alert('Select the Category');
               return;
          }else{
               (<any>$("#editCategories")).modal("show");
               $("#edit_category_name").val(this.sel_category['category_name']);
               $("#edit_parent_id").val(this.sel_category['parent_id']);
               $("#edit_category_id").val(this.sel_category['_id']);
          }
       }

//  send add-category request to server, and relaod category_list
     addcategory() {
          if ($("#category_name").val() != "") {
               this.category.category_name = $("#category_name").val();
               this.category.parent_id = $("#parent_id").val();
               this.auth.addcategory(this.category).subscribe(() => {
                    this.fill_parent_category();
               }, (err) => {
                    console.error(err);
               });
               $("#category_name").val("");
          }
          (<any>$("#addCategories")).modal("hide");
     }
// send edit-category request to server, and reload category_list
     editcategory() {

          if ($("#edit_category_name").val() != "") {
               this.category.category_name = $("#edit_category_name").val();
               this.category.parent_id = $("#edit_parent_id").val();
               this.category.id = $("#edit_category_id").val();

               this.auth.editcategory(this.category).subscribe(() => {
                    this.fill_parent_category();
               }, (err) => {
                    console.error(err);
               });
               $("#edit_category_name").val("");
          }
          (<any>$("#editCategories")).modal("hide");
     }
//  send delete category request, reload category_list
     delcategory() {
          if (this.sel_category == undefined || this.sel_category['parent_id'] == "0") {
               alert('Select the Category');
               return;
          }
          else {
               this.category.id = this.sel_category['_id'];
               this.auth.delcategory(this.category).subscribe(() => {
                    this.fill_parent_category();
               }, (err) => {
                    console.error(err);
               });

          }
     }
//  send add product request, reload product_list
     additem() {

          var keywords_str=$("#keywords").val().toString();
          if (keywords_str.trim()!='')
                var keywords_array= keywords_str.split(','); //make string to array

          if (this.sel_category == '' || this.sel_category==undefined) {
               alert('Select the Category');
               return;
          }
          else {
               if ($("#item_name").val() != "") {
                    this.product.product_name = $("#item_name").val();
                    this.product.category_id = this.sel_category['_id'];
                    this.product.keywords =keywords_array;

                   // call service
                    this.auth.addproduct(this.product).subscribe(() => {
                    this.load_product();
                    }, (err) => {
                         console.error(err);
                    });

               }else{
                    alert('Input the Product Name');
                    return;
               }
              // this.flashM.show(this.auth.getUserDetails().email +' added Products', {cssClass : 'alert-danger'});

               $("#item_name").val("");
               $("#keywords").val("");

               (<any>$("#addItems")).modal("hide");
          }
     }

     //  send delete product request, reload product_list

     delprodudct() {

          if (this.sel_product == undefined || this.sel_product =="0" ) {
               alert('Select the Product');
               return;
          }
          else {

               this.product.id = this.sel_product;

               this.auth.delproduct(this.product).subscribe(() => {
                    this.load_product();
               }, (err) => {
                    console.error(err);
               });

          }
     }

}
