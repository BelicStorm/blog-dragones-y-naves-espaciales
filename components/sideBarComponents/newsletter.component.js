const SubscribeSection = () =>{
    return <div className="mt-10 brutalist bg-white lg:block">
                <form action="https://www.getrevue.co/profile/dragonesYnaves/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
                    <h2 className="font-light text-xl mb-5 text-gray-900 text-center">Suscribete a nuestra Newsletter</h2>
                    <div className="flex flex-col gap-2 mb-2">
                        <label htmlFor="member_email">Email</label>
                        <input className="revue-form-field" placeholder="Your email address..." type="email" name="member[email]" id="member_email"/>
                    </div>
                    <div className="revue-form-actions">
                        <input className="text-sm px-4 my-2 py-1 leading-normal  brutalist bg-white cursor-pointer" type="submit" value="Subscribe" name="member[subscribe]" id="member_submit"/>
                    </div>
                    <div className="font-light text-sm text-gray-400">Suscribiendote, aceptas los 
                        <a className="text-gray-600" target="_blank" href="https://www.getrevue.co/terms"> Terminos de servicio</a> y 
                        <a className="text-gray-600" target="_blank" href="https://www.getrevue.co/privacy"> La politica de privacidad</a> de Revue.</div>
                    </form>
            </div>
}

export default SubscribeSection