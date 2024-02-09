import { env } from '$env/dynamic/public';

export async function triggerNewCommentWebhook(
  content: string,
  origin: string,
) {
  const embed = {
    title: 'Nov komentar oddan na FRIVSŠPR',
    type: 'rich',
    description: content,
    url: `${origin}/admin`,
  };

  const body = {
    embeds: [embed],
  };

  const request = await fetch(env.PUBLIC_DISCORD_WEBHOOK, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
    },
  });
}
