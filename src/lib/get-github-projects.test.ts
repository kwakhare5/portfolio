import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getGithubData } from './get-github-projects';
import { DATA } from '@/data/resume';

global.fetch = vi.fn();

describe('getGithubData', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should filter out forks and unapproved repos', async () => {
    (global.fetch as any).mockResolvedValue({
      ok: true,
      json: async () => [
        { name: 'Git-for-Prompts', fork: false, html_url: 'url', stargazers_count: 5, pushed_at: '2023-01-01' },
        { name: 'forked-repo', fork: true, html_url: 'url', stargazers_count: 5, pushed_at: '2023-01-01' },
        { name: 'workflow', fork: false, html_url: 'url', stargazers_count: 5, pushed_at: '2023-01-01' },
        { name: 'ateion', fork: false, html_url: 'url', stargazers_count: 5, pushed_at: '2023-01-01' },
      ],
    });

    const data = await getGithubData();
    expect(data.projects.length).toBe(1);
    expect(data.projects[0].title).toBe('Git for Prompts');
  });

  it('should sort repos by stargazers count', async () => {
    (global.fetch as any).mockResolvedValue({
      ok: true,
      json: async () => [
        { name: 'tonal', fork: false, html_url: 'url', stargazers_count: 10, pushed_at: '2023-01-01' },
        { name: 'prefill', fork: false, html_url: 'url', stargazers_count: 50, pushed_at: '2023-01-01' },
      ],
    });

    const data = await getGithubData();
    expect(data.projects[0].title).toBe('PreFill');
    expect(data.projects[1].title).toBe('Tonal');
  });

  it('should fallback to static DATA on fetch error', async () => {
    (global.fetch as any).mockResolvedValue({
      ok: false,
      status: 403,
    });

    const data = await getGithubData();
    expect(data.projects).toEqual(DATA.projects);
  });
});
