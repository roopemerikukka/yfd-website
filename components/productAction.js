import LinkButton from '../components/linkButton'

export default ({ label, url, onClick }) => (
  <div className='product-action'>
    <LinkButton link={url} onClick={onClick}>{label}</LinkButton>

    <style jsx>{`
      .product-action {
        margin: 0;
      }

      .product-action :global(a) {
        margin-bottom: 0;
      }
    `}</style>
  </div>
)