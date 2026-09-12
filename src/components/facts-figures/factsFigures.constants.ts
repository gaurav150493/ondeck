export interface Fact {
  value: string;
  label: string;
  note: string;
}

export const facts: Fact[] = [
  { value: "15", label: "Clients", note: "Worldwide" },
  { value: "30", label: "Launched", note: "Projects" },
  { value: "3", label: "Years", note: "In the industry" },
  { value: "99.99%", label: "Uptime", note: "Guaranteed" },
  { value: "24/7", label: "Tech support", note: "Always on" },
];
