// Card components for displaying services.
// ServiceCard is the full version with title, description and icon.
// SimpleServiceCard is a compact button-like version used in the grid picker.

interface Service {
  title: string;
  description: string;
  descriptionParts?: string[];
  icon: string;
}

interface ServiceCardProps {
  service: Service;
  id?: string;
}

export function ServiceCard({ service, id }: ServiceCardProps) {
  return (
    <div
      id={id}
      className="rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1"
    >
      <span className="text-3xl" aria-hidden="true">
        {service.icon}
      </span>
      <h3 className="mt-3 text-lg font-bold text-card-foreground">{service.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
      {service.descriptionParts?.map((part) => (
        <p key={part} className="mt-3 text-sm text-foreground/90 leading-relaxed">{part}</p>
      ))}
    </div>
  );
}

interface SimpleServiceCardProps {
  service: Service;
  onClick?: () => void;
}

export function SimpleServiceCard({ service, onClick }: SimpleServiceCardProps) {
  return (
    <button
      className="rounded-xl bg-card border border-border p-4 text-center transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
      onClick={onClick}
      aria-label={`Navigate to ${service.title} service details`}
    >
      <span className="text-xl" aria-hidden="true">
        {service.icon}
      </span>
      <h3 className="mt-2 text-sm font-bold text-card-foreground">{service.title}</h3>
    </button>
  );
}