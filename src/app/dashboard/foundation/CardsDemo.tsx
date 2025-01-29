import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/aria-component/card";
import { Button } from "@/components/ui/button";

export default function CardsDemo() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Cards Demo</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Carte Simple */}
        <Card>
          <CardHeader>
            <CardTitle>Carte Simple</CardTitle>
          </CardHeader>
        </Card>

        {/* Carte Complète */}
        <Card>
          <CardHeader>
            <CardTitle>Carte Complète</CardTitle>
            <CardDescription>
              Cette carte montre tous les composants disponibles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Le contenu principal de la carte peut contenir du texte, des images
              ou d'autres éléments.
            </p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">Dernière mise à jour : aujourd'hui</p>
          </CardFooter>
        </Card>

        {/* Carte Interactive */}
        <Card variant="paper">
          <CardHeader>
            <CardTitle>Carte Interactive</CardTitle>
            <CardDescription>Avec des boutons d'action</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Cette carte démontre l'utilisation de boutons interactifs.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              className="hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Annuler
            </Button>
            <Button>Confirmer</Button>
          </CardFooter>
        </Card>

        {/* Carte avec Image */}
        <Card variant="paper">
          <div className="aspect-video w-full overflow-hidden rounded-t-lg">
            <img
              src="https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=500&q=80"
              alt="Exemple d'image"
              className="w-full h-full object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle>Carte avec Image</CardTitle>
            <CardDescription>Une image en haut de la carte</CardDescription>
          </CardHeader>
          <CardContent>
            <p>L'ajout d'images peut rendre vos cartes plus attrayantes.</p>
          </CardContent>
        </Card>

        {/* Carte avec Variante Outline */}
        <Card variant="outline">
          <CardHeader>
            <CardTitle>Carte Outline</CardTitle>
            <CardDescription>Une variante avec bordure</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Cette carte utilise la variante outline pour un style différent.</p>
          </CardContent>
        </Card>
      </div>

      {/* Carte Horizontale */}
      <Card variant="paper" className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3">
          <img
            src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=500&q=80"
            alt="Image horizontale"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <CardHeader>
            <CardTitle>Carte Horizontale</CardTitle>
            <CardDescription>Layout horizontal pour plus de contenu</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Cette mise en page horizontale est parfaite pour les articles de blog
              ou les aperçus de produits.
            </p>
          </CardContent>
          <CardFooter>
            <Button>En savoir plus</Button>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}