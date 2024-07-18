app.on('pull_request.opened', async (context) => {
    const { number } = context.payload.pull_request;
    const deployUrl = `http://{your-server-ip/domain}/pr-${number}`;
  
    const comment = context.issue({
      body: `Deployment started: ${deployUrl}`
    });
    await context.octokit.issues.createComment(comment);
  });
  
  app.on('pull_request.synchronize', async (context) => {
    const { number } = context.payload.pull_request;
    const deployUrl = `http://{your-server-ip/domain}/pr-${number}`;
  
    const comment = context.issue({
      body: `Deployment updated: ${deployUrl}`
    });
    await context.octokit.issues.createComment(comment);
  });
  
  app.on('pull_request.closed', async (context) => {
    const { number } = context.payload.pull_request;
  
    const comment = context.issue({
      body: `Deployment removed for PR #${number}`
    });
    await context.octokit.issues.createComment(comment);
  });
  