import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from '../Navbar';

describe('Navbar', () => {
  beforeEach(() => {
    // Reset scroll position before each test
    window.scrollY = 0;
  });

  it('renders navbar with logo and title', () => {
    render(<Navbar />);
    expect(screen.getByText('Suzanne Kellow')).toBeInTheDocument();
  });

  it('renders all navigation items on desktop', () => {
    render(<Navbar />);
    const navItems = ['Home', 'About', 'Services', 'Gallery', 'Contact'];

    navItems.forEach(item => {
      const items = screen.getAllByText(item);
      // At least one should exist (may be duplicated in mobile menu)
      expect(items.length).toBeGreaterThan(0);
    });
  });

  it('renders navigation links with correct hrefs', () => {
    render(<Navbar />);
    const navItems = ['Home', 'About', 'Services', 'Gallery', 'Contact'];

    navItems.forEach(item => {
      const allLinks = screen.getAllByText(item);
      // Check that at least one has the correct href
      const hasCorrectHref = allLinks.some(element => {
        const link = element.closest('a');
        return link?.getAttribute('href') === `#${item.toLowerCase()}`;
      });
      expect(hasCorrectHref).toBe(true);
    });
  });

  it('has transparent background initially', () => {
    render(<Navbar />);
    const nav = screen.getByText('Suzanne Kellow').closest('nav');
    expect(nav).toHaveClass('bg-transparent');
  });

  it('changes to navy background on scroll', async () => {
    render(<Navbar />);
    const nav = screen.getByText('Suzanne Kellow').closest('nav');

    // Simulate scroll event
    window.scrollY = 50;
    window.dispatchEvent(new Event('scroll'));

    // Wait for state update
    await new Promise(resolve => setTimeout(resolve, 100));

    expect(nav).toHaveClass('bg-navy');
  });

  it('returns to transparent background when scrolled back to top', async () => {
    render(<Navbar />);
    const nav = screen.getByText('Suzanne Kellow').closest('nav');

    // Scroll down
    window.scrollY = 50;
    window.dispatchEvent(new Event('scroll'));
    await new Promise(resolve => setTimeout(resolve, 100));
    expect(nav).toHaveClass('bg-navy');

    // Scroll back up
    window.scrollY = 5;
    window.dispatchEvent(new Event('scroll'));
    await new Promise(resolve => setTimeout(resolve, 100));

    expect(nav).toHaveClass('bg-transparent');
  });

  it('has a toggle button for mobile menu', () => {
    render(<Navbar />);
    const nav = screen.getByText('Suzanne Kellow').closest('nav');
    // Find button inside the first md:hidden container (the toggle button)
    const toggleButton = nav?.querySelector('.md\\:hidden button');
    expect(toggleButton).toBeInTheDocument();
  });

  it('toggles menu visibility when toggle button clicked', async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    const nav = screen.getByText('Suzanne Kellow').closest('nav');

    // Initially menu should be hidden (unless small viewport makes it visible differently)
    // Get the toggle button
    const toggleButton = nav?.querySelector('.md\\:hidden button');

    // Click to open
    await user.click(toggleButton!);

    // After click, the icon should change (Menu becomes X or vice versa)
    // Check that both sets of nav items render (desktop in md:block, mobile in md:hidden)
    const homeLinks = screen.getAllByText('Home');
    expect(homeLinks.length).toBeGreaterThanOrEqual(2); // Desktop + mobile
  });

});
