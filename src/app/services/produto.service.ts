import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { AngularFirestore } from "@angular/fire/firestore"

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private firedb: AngularFirestore
  ) { }

  add(produto: Produto) {
    return this.firedb.collection("produtos").add(
      {
        nome: produto.nome,
        descricao: produto.descricao,
        categoria: produto.categoria,
        valor: produto.valor,
        quant: produto.quant,
        fotos: produto.fotos,
        ativo: produto.ativo,
        lat: produto.lat,
        lng: produto.lng
      });
  }

  get(id) {
    return this.firedb.collection<Produto>("produtos").doc(id).get();
  }

  update(produto: Produto, id: any) {
    return this.firedb.collection("produtos").doc(id).update(produto);
  }

  delete(id: any) {
    return this.firedb.collection("produtos").doc(id).update({
      ativo: false
    });
    //return this.firedb.collection("produtos").doc(id).remove();
  }

}
