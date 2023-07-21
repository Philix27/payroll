export function formatWalletAddress(addr: string): string {
  return `${addr.substring(0, 4)}...${addr.substring(38)}`;
}
