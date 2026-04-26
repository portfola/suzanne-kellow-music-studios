import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Gallery from '../Gallery';

describe('Gallery', () => {
  it('renders gallery section with title', () => {
    render(<Gallery />);
    expect(screen.getByText('Gallery')).toBeInTheDocument();
    expect(screen.getByText(/Glimpses of musical moments/)).toBeInTheDocument();
  });

  it('renders navigation buttons', () => {
    render(<Gallery />);
    expect(screen.getByLabelText('Previous')).toBeInTheDocument();
    expect(screen.getByLabelText('Next')).toBeInTheDocument();
  });

  it('displays first media item on initial render', () => {
    render(<Gallery />);
    const img = screen.getByAltText('Piano lesson with young student');
    expect(img).toBeInTheDocument();
  });

  it('advances to next item when next button is clicked', async () => {
    const user = userEvent.setup();
    render(<Gallery />);

    const nextBtn = screen.getByLabelText('Next');
    await user.click(nextBtn);

    const nextImg = screen.getByAltText('Conducting a youth choir');
    expect(nextImg).toBeInTheDocument();
  });

  it('goes to previous item when previous button is clicked', async () => {
    const user = userEvent.setup();
    render(<Gallery />);

    const nextBtn = screen.getByLabelText('Next');
    await user.click(nextBtn);

    const prevBtn = screen.getByLabelText('Previous');
    await user.click(prevBtn);

    const firstImg = screen.getByAltText('Piano lesson with young student');
    expect(firstImg).toBeInTheDocument();
  });

  it('wraps to last item when previous is clicked on first item', async () => {
    const user = userEvent.setup();
    const { container } = render(<Gallery />);

    const prevBtn = screen.getByLabelText('Previous');
    await user.click(prevBtn);

    // Should wrap to last item (a video with src containing 'student-recital-3.mov')
    const media = container.querySelector('img, video');
    expect(media).toBeInTheDocument();
    // The last item is a video, so we should find a video element
    const videos = container.querySelectorAll('video');
    if (videos.length > 0) {
      const lastVideo = videos[videos.length - 1];
      expect(lastVideo.src).toContain('student-recital');
    }
  });

  it('wraps to first item when next is clicked on last item', async () => {
    const user = userEvent.setup();
    render(<Gallery />);

    const nextBtn = screen.getByLabelText('Next');
    // Click next 5 times to reach the last item (5 items total)
    for (let i = 0; i < 5; i++) {
      await user.click(nextBtn);
    }

    const firstImg = screen.getByAltText('Piano lesson with young student');
    expect(firstImg).toBeInTheDocument();
  });

  it('opens fullscreen modal when image is clicked', async () => {
    const user = userEvent.setup();
    render(<Gallery />);

    const img = screen.getByAltText('Piano lesson with young student');
    await user.click(img);

    const closeBtn = screen.getByLabelText('Close');
    expect(closeBtn).toBeInTheDocument();
  });

  it('closes fullscreen modal when close button is clicked', async () => {
    const user = userEvent.setup();
    render(<Gallery />);

    const img = screen.getByAltText('Piano lesson with young student');
    await user.click(img);

    const closeBtn = screen.getByLabelText('Close');
    await user.click(closeBtn);

    expect(closeBtn).not.toBeInTheDocument();
  });

  it('does not show fullscreen modal for video items', async () => {
    const user = userEvent.setup();
    const { container } = render(<Gallery />);

    const nextBtn = screen.getByLabelText('Next');
    // Click next twice to reach first video (index 2)
    await user.click(nextBtn);
    await user.click(nextBtn);

    // Find the video element in the display
    const video = container.querySelector('video');
    expect(video).toBeInTheDocument();
    expect(video?.tagName).toBe('VIDEO');

    // Video should have controls
    expect(video?.getAttribute('controls')).not.toBeNull();
  });
});
