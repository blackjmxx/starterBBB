import React, { useState } from 'react';
import { TextField } from '../../../aria-component/text-field';

const TextFieldDemo: React.FC = () => {
  const [values, setValues] = useState<{ [key: string]: string }>({});

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">TextField Demo</h2>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Basique</h3>
        <div className="max-w-md">
          <TextField
            label="Champ basique"
            placeholder="Texte basique"
            value={values.basic || ''}
            onChange={(value) => setValues(prev => ({ ...prev, basic: value }))}
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Tailles</h3>
        <div className="space-y-4 max-w-md">
          <TextField
            label="Petit"
            placeholder="Petit"
            size="sm"
          />
          <TextField
            label="Moyen"
            placeholder="Moyen"
            size="md"
          />
          <TextField
            label="Grand"
            placeholder="Grand"
            size="lg"
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">États</h3>
        <div className="space-y-4 max-w-md">
          <TextField
            label="Désactivé"
            placeholder="Désactivé"
            isDisabled
          />
          <TextField
            label="Erreur"
            placeholder="Erreur"
            state="error"
            errorMessage="Ce champ contient une erreur"
          />
          <TextField
            label="Succès"
            placeholder="Succès"
            state="success"
            description="Ce champ est valide"
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Types</h3>
        <div className="space-y-4 max-w-md">
          <TextField
            label="Mot de passe"
            type="password"
            placeholder="Mot de passe"
          />
          <TextField
            label="Nombre"
            type="number"
            placeholder="Nombre"
          />
          <TextField
            label="Email"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
    </div>
  );
};

export default TextFieldDemo;