import { IArtigo } from "@artigaria/common";

export class Artigo {

  public static fromJson(iArtigo: IArtigo): Artigo {
    return new Artigo(
      iArtigo._id,
      iArtigo.imagem,
      iArtigo.titulo,
      iArtigo.descricao,
      iArtigo.url,
    );
  }

  constructor(
    public readonly id: number,
    public imagem: string,
    public titulo: string,
    public descricao: string,
    public url: string,
  ) {
  }

  /**
   * Retorna os dados do artigo em formato serializável JSON.
   */
  public asJson(): IArtigo {
    return {
      _id: this.id,
      titulo: this.titulo,
      descricao: this.descricao,
      imagem: this.imagem,
      url: this.url,
    };
  }

}
