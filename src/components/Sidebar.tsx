import type { Client } from '../content/changelog/data';

interface SidebarProps {
  clients: Client[];
  currentClientId?: string;
  currentProjectId?: string;
}

export function Sidebar({ clients, currentClientId, currentProjectId }: SidebarProps) {
  return (
    <nav className="w-full lg:w-64 flex-shrink-0">
      <div className="sticky top-24 space-y-6">
        <div>
          <a
            href="/"
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
              !currentClientId
                ? 'bg-primary-500/10 text-primary-500'
                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-surface-200 dark:hover:bg-surface-800'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <span className="font-medium">Overview</span>
          </a>
        </div>

        {clients.map((client) => (
          <div key={client.id} className="space-y-2">
            <h3 className="px-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">
              {client.name}
            </h3>
            <ul className="space-y-1">
              {client.projects.map((project) => {
                const isActive = currentClientId === client.id && currentProjectId === project.id;
                return (
                  <li key={project.id}>
                    <a
                      href={`/${client.id}/${project.id}`}
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                        isActive
                          ? 'bg-primary-500/10 text-primary-500 font-medium'
                          : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-surface-200 dark:hover:bg-surface-800'
                      }`}
                    >
                      {project.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
