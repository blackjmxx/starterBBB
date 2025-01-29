import {
  FilePlusIcon,
  LinkIcon,
  PenLineIcon,
  Trash2Icon,
} from 'lucide-react';
import { Icon } from '../../../aria-component/accessible-icon';
import { Kbd } from '../../../aria-component/kbd';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItemDescription,
  MenuItemLabel,
  MenuPopover,
  MenuSeparator,
  MenuTrigger,
} from '../../../aria-component/menu';

export default function MenuDemo() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Menu Basique</h3>
        <MenuTrigger>
          <MenuButton>Options</MenuButton>
          <MenuPopover>
            <Menu>
              <MenuItem>Nouveau fichier</MenuItem>
              <MenuItem>Copier le lien</MenuItem>
              <MenuItem>Éditer le fichier</MenuItem>
              <MenuItem>Supprimer le fichier</MenuItem>
            </Menu>
          </MenuPopover>
        </MenuTrigger>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Menu avec Icônes et Descriptions</h3>
        <MenuTrigger>
          <MenuButton>Options Avancées</MenuButton>
          <MenuPopover>
            <Menu>
              <MenuItem>
                <Icon>
                  <FilePlusIcon />
                </Icon>
                <MenuItemLabel>Nouveau fichier</MenuItemLabel>
                <MenuItemDescription>Créer un nouveau fichier</MenuItemDescription>
                <Kbd>⌘N</Kbd>
              </MenuItem>
              <MenuItem>
                <Icon>
                  <LinkIcon />
                </Icon>
                <MenuItemLabel>Copier le lien</MenuItemLabel>
                <MenuItemDescription>Copier le lien du fichier</MenuItemDescription>
                <Kbd>⌘C</Kbd>
              </MenuItem>
              <MenuItem>
                <Icon>
                  <PenLineIcon />
                </Icon>
                <MenuItemLabel>Éditer le fichier</MenuItemLabel>
                <MenuItemDescription>
                  Permet de modifier le fichier
                </MenuItemDescription>
                <Kbd>⌘⇧E</Kbd>
              </MenuItem>
              <MenuSeparator />
              <MenuItem destructive>
                <Icon>
                  <Trash2Icon />
                </Icon>
                <MenuItemLabel>Supprimer le fichier</MenuItemLabel>
                <MenuItemDescription>
                  Supprimer définitivement le fichier
                </MenuItemDescription>
                <Kbd>⌘⇧D</Kbd>
              </MenuItem>
            </Menu>
          </MenuPopover>
        </MenuTrigger>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Menu avec État Désactivé</h3>
        <MenuTrigger>
          <MenuButton>Options</MenuButton>
          <MenuPopover>
            <Menu>
              <MenuItem>Nouveau fichier</MenuItem>
              <MenuItem>Copier le lien</MenuItem>
              <MenuItem>Éditer le fichier</MenuItem>
              <MenuItem isDisabled>Supprimer le fichier</MenuItem>
            </Menu>
          </MenuPopover>
        </MenuTrigger>
      </div>
    </div>
  );
}