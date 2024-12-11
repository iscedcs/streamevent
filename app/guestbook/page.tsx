import { getGuestbookEntries } from "../actions/guestbookEntries";
import Guestbook from "./GuestBook";

export default async function GuestbookPage() {
  const initialEntries = await getGuestbookEntries(undefined, 10);

  return <Guestbook initialEntries={initialEntries} />;
}
