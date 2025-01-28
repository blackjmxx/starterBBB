'use client';

import { CopyButton } from '@/aria-component/clipboard';
import { Card } from '@/components/ui/card';

export default function ClipboardDemo() {
  const sampleCode = `npm install @your-package/name`;
  const sampleText = "Voici un texte d'exemple à copier";

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Bouton de copie basique</h2>
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <span>{sampleText}</span>
            <CopyButton copyValue={sampleText} />
          </div>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Copie de code avec label personnalisé</h2>
        <Card className="p-4">
          <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-3 rounded-lg font-mono">
            <code>{sampleCode}</code>
            <CopyButton 
              copyValue={sampleCode}
              label="Copier la commande"
              labelAfterCopied="Commande copiée !"
              variant="outline"
            />
          </div>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Bouton de copie avec texte</h2>
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <CopyButton 
              copyValue="Texte avec bouton personnalisé"
              variant="solid"
            >
              Copier avec texte
            </CopyButton>
          </div>
        </Card>
      </div>
    </div>
  );
}