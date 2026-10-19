import { Device } from './types';

/**
 * Safety-critical device data-preparation checklists (§4.4)
 * Tailored by device type. Chargers require no data steps,
 * but include physical inspection safety instructions.
 */
export const DEVICE_CHECKLISTS: Record<Device, string[]> = {
  phone: [
    "Back up photos, contacts, authenticator apps, and messages to a secure cloud or local backup.",
    "Sign out of Apple ID, Google Account, and all messaging or banking accounts; disable device locks/PIN.",
    "Perform a full factory data reset to cryptographically erase user data partitions.",
    "Eject physical SIM card, remove any microSD memory card, and detach protective cases or screen rings.",
  ],
  tablet: [
    "Back up all local documents, notes, photos, and drawing projects to cloud or external storage.",
    "Sign out of Apple ID, Google Account, or Microsoft account and turn off activation lock.",
    "Perform an official factory reset from system settings to wipe storage securely.",
    "Remove any installed SIM card, memory cards, adhesive accessories, or screen protectors.",
  ],
  laptop: [
    "Transfer all personal documents, code repositories, browser passwords, and files to an encrypted external drive.",
    "Sign out of cloud accounts (Apple/Google/Microsoft), revoke software licenses, and delete user profiles.",
    "Perform a secure drive wipe or clean OS factory reinstall (BitLocker / FileVault wipe).",
    "Disconnect wireless dongles, SD cards, external accessories, and power cables.",
  ],
  other: [
    "Back up any stored media, user profiles, or configuration files associated with the hardware.",
    "Sign out of companion smartphone apps and disconnect device from home Wi-Fi and Bluetooth networks.",
    "Initiate a factory hardware reset using the onboard reset button or management interface.",
    "Remove any inserted batteries, memory cards, or proprietary connectors.",
  ],
  charger: [
    "Inspect the cable insulation and plug prongs carefully for cracks, fraying, scorch marks, or exposed wiring.",
    "Untangle gently without stretching or kinking the internal conductors.",
    "Bundle neatly with a reusable cable tie or velcro strap; remove detachable third-party adapters.",
  ],
};

export function getChecklistForDevice(device: Device): string[] {
  return DEVICE_CHECKLISTS[device] || [];
}
