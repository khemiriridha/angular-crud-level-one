import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Product } from '../interface/product';
import { BurlService } from '../service/burl.service';
@Injectable()
 
// Service for products data.
export class ProductService {

 
 constructor(private httpClient: BurlService, private _http : Http) {
    ///this.httpClient = httpClient;
  }

   readProducts(): Observable<Product[]>{
	 var d = new Date();
     var time = d.getMilliseconds();
    return this.httpClient.get("product/read.php?time="+time).map(res => res.json());

  }
 /***
    // We need Http to talk to a remote server.
    constructor(private _http : Http){ }
 
    // Get list of products from remote server.
    readProducts(): Observable<Product[]>{
		var d = new Date();
		var time = d.getMilliseconds();
		console.log("http://developpement.multiresto.fr/api/product/read.php?time="+time);
        return this._http
            .get("http://developpement.multiresto.fr/api/product/read.php?time="+time)
            .map(res => res.json());
    }
**/
	// Send product data to remote server to create it.
	createProduct(product): Observable<Product>{
	    
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
	 
		return this._http.post(
			"http://developpement.multiresto.fr/api/product/create.php",
			product,
			options
		).map(res => res.json());
	}
	// Get a product details from remote server.
	readOneProduct(product_id): Observable<Product>{
		var d = new Date();
		var time = d.getMilliseconds();
	return this._http
		.get("http://developpement.multiresto.fr/api/product/read_one.php?id="+product_id+"&time="+time)
		.map(res => res.json());
	}
	// Send product data to remote server to update it.
	updateProduct(product): Observable<Product>{
	 
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
	 
		return this._http.post(
			"http://developpement.multiresto.fr/api/product/update.php",
			product,
			options
		).map(res => res.json());
	}
	// Send product ID to remote server to delete it.
	deleteProduct(product_id){
	 
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
	 
		return this._http.post(
			"http://developpement.multiresto.fr/api/product/delete.php",
			{ id: product_id },
			options
		).map(res => res.json());
	}

}